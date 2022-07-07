const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "media",
          isFolder: true,
          items: [
            {
              name: "flower.jpg",
              isFolder: false
            }
          ]
        },
        {
          name: "index.html",
          isFolder: false
        }
      ]
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "App.js",
          isFolder: false
        },
        {
          name: "Index.js",
          isFolder: false
        },
        {
          name: "components",
          isFolder: true,
          items: [
            {
              name: "User.js",
              isFolder: false
            },            
          ]
        }
      ]
    },

    {
      name: "package.json",
      isFolder: false
    }
  ]
};

export default explorer;
