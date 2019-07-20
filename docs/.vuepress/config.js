module.exports = {
  title: 'Plaza documentation',
  // description: "We're working on it!",
  dest: 'public'  // Destination directory for the build step
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
      ]
    }
  ]
}
