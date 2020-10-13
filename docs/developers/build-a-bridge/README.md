# How to build a Bridge

::: warning STABILITY NOTE
The bridge libraries are under heavy development.
Keep in mind that the usage of this libraries will change in the future.
:::

This guide will show you how to [prepare the necessary elements](#preparations) to develop new Programaker briges,
and will show you some base examples on how to write bridges with [getter](#getter-operations),
[operation](#operation-blocks) and [event](#event-blocks) blocks.
These blocks are shown in separate code samples for simplicity, but can be freely mixed.



## Preparations

This tutorial assumes that you know how to program in Python, and already have a basic environment setup.

First install the library to build bridges with `pip install --user -U programaker-bridge`

After that, log into Programaker, click on the menu on the top-left corner, go to the `Bridges` section  and click on `Add One!`.

Set the name of your bridge on the resulting menu (minimum of 4 characters) and
click `Create`, this will create a new bridge and take you to it's management
panel (you can go back there by clicking on the card with the bridge name or icon).

From this panel, we will have to copy the URL just next to `Connection URL:`,
this is the **Bridge endpoint**.

The latest thing we have to do is to generete a secret token. To generate this
*secret tokens* latest thing we have to do in this panel is to click on the `+`
button next to `Connection tokens` to generate a new *token*. Give it a name and
click `Save`. A new token will be added to the list with a `Token key` not being
`********`. Copy that key and keep it safe.

Tokens are the way to make sure that the program connecting to the bridge URL
not an impostor, and so it is important to avoid sharing them. It is always
possible to generate new ones or to remove existing ones (but not to check it's
secret part), so it's in case one might have been lost, to remove that and
generate a new one is always the safest path.

After this you can click outside the bridge's dialog, and then on *Programaker's* logo on the top-left corner to return to the dashboard.

## Getter blocks

**Getter** blocks (or [reporter blocks](https://en.scratch-wiki.info/wiki/Reporter_Block) on Scratch)
are blocks that cannot run independently, but allow to obtain a value that might be used on other operations.
In our case we'll build a **getter** that returns a random number given a lower and an upper bound.

![](./random-number-block.png)

```python
from programaker_bridge import (
    ProgramakerBridge,  # Import bridge functionality
    BlockArgument,  # Needed for argument definition
)

# Create the bridge object
bridge = ProgramakerBridge(name="Random number bridge",
                     # Configure the bridge endpoint
                     endpoint="**insert here the bridge endpoint**",
                     # Configure the bridge token
                     token="**insert here the bridge authentication token**",
)

# Define the getter
@bridge.getter(
    id="get_random_number",  # Give it an ID
    message="Random number between %1 and %2",  # Define the message on the block
    arguments=[
        BlockArgument(int, 0), # Define the two parameters, two integers
        BlockArgument(int, 100),  # with defaults of 0 and 100
    ],
    block_result_type=int,  # The result is another integer
)
def get_random_number(lower, upper, extra_data):
    # Getter logic
    import random
    return random.randint(int(lower), int(upper))

bridge.run() # Launch the bridge
```

If we run this, we'll find a new block that we can use in our programs to retrieve values.

![](./random-number-program.png)


## Operation blocks

**Operation** blocks (or [stack blocks](https://en.scratch-wiki.info/wiki/Stack_Block) on Scratch)
are blocks that run an independent operation, and which can be concatenated.
In our case we'll build a **operation** that prints something on the bridge console.

![](./log-to-console-block.png)

```python
from programaker_bridge import (
    ProgramakerBridge,  # Import bridge functionality
    BlockArgument,  # Needed for argument definition
)

# Create the bridge object
bridge = ProgramakerBridge(name="Console bridge"
                     # Configure the bridge endpoint
                     endpoint="**insert here the bridge endpoint**",
                     # Configure the bridge token
                     token="**insert here the bridge authentication token**",
)

# Define the getter
@bridge.operation(
    id="print_on_console",  # Give it an ID
    message="Show on console %1",  # Define the message on the block
    arguments=[
        BlockArgument(str, "Test"), # Define the parameter, a string
    ]
)
def print_on_console(data, extra_data):
    print(data)

bridge.run() # Launch the bridge
```

If we run this, we'll find a new block that we can use in our programs to perform actions.

![](./log-to-console-program.png)


## Event blocks

**Event** blocks (or [hat blocks](https://en.scratch-wiki.info/wiki/Hat_Block) on Scratch)
are blocks that sit on top of **reporter** blocks and trigger them when an event happens.
In our case we'll build a **event** that is triggered every minute.

![](./send-uptime-event-block.png)

```python

from programaker_bridge import (
    ProgramakerBridge,  # Import bridge functionality

    # Advanced block creation
    VariableBlockArgument,
    BlockContext,
)

# Create the bridge object
bridge = ProgramakerBridge(
    name="Uptime bridge",  # Bridge name
    events=["on_update"],  # Define available bridge events
                     # Configure the bridge endpoint
                     endpoint="**insert here the bridge endpoint**",
                     # Configure the bridge token
                     token="**insert here the bridge authentication token**",
)

# Extract event
on_update = bridge.events.on_update
# Define event blocks
on_update.add_trigger_block(
    id="on_update_set",
    message="On uptime update. Save uptime to %1",  # Set the message
    arguments=[VariableBlockArgument()],    # Add a slot to point to a variable
    save_to=BlockContext.ARGUMENTS[0],      # Point to the variable where is saved
)

# Parallel logic
import threading
import time
def uptime_counter():
    uptime_minutes = 0
    while True:
        time.sleep(60)
        uptime_minutes += 1

        print("Sending uptime:", uptime_minutes)
        # Send event
        on_update.send(
            to_user=None,  # Send to everyone
            content=uptime_minutes,  # Content of the event
        )

threading.Thread(target=uptime_counter).start()

# Launch bridge
bridge.run() # Launch the bridge
```

If we run this, we'll find a new block that we can use to detect events and do something
based on what happened.

![](./send-uptime-event-program.png)
