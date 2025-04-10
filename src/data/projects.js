const data = [
  {
    title: "Project 1",
    slug: "project-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sourceCode: 'https://github.com/auryncode/portofolio',
    demo: '/',
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    detail:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsa necessitatibus nisi, deserunt doloremque ducimus voluptatum ipsam iure saepe atque cum consectetur corrupti veniam et accusamus ab doloribus nesciunt possimus?  Iure a accusantium, assumenda molestias alias earum ea harum eligendi at minima aliquam modi explicabo! Accusamus quam delectus exercitationem voluptatem eum! Quam autem incidunt tempore esse quisquam voluptatem aperiam dolorem.  Provident labore iste error incidunt asperiores aut ipsa sit neque, consequatur amet officia in illum, totam nulla libero. Molestiae eaque possimus repudiandae, sit officiis dolore officia tenetur eos distinctio placeat!",
    createdAt: new Date('2025/01/10').getTime(),
    tags: ['development', 'tips', 'js']
  },
  {
    title: "Project 4",
    slug: "project-4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sourceCode: 'https://github.com/auryncode/portofolio',
    demo: '/',
    image:
      "https://images.unsplash.com/photo-1735760672905-954da053c445?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detail:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsa necessitatibus nisi, deserunt doloremque ducimus voluptatum ipsam iure saepe atque cum consectetur corrupti veniam et accusamus ab doloribus nesciunt possimus?  Iure a accusantium, assumenda molestias alias earum ea harum eligendi at minima aliquam modi explicabo! Accusamus quam delectus exercitationem voluptatem eum! Quam autem incidunt tempore esse quisquam voluptatem aperiam dolorem.  Provident labore iste error incidunt asperiores aut ipsa sit neque, consequatur amet officia in illum, totam nulla libero. Molestiae eaque possimus repudiandae, sit officiis dolore officia tenetur eos distinctio placeat!",
    createdAt: new Date('2024/09/10').getTime(),
    tags: ['development', 'tips', 'js']
  },
  {
    title: "Project 2",
    slug: "project-2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sourceCode: '',
    demo: '/',
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    detail:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsa necessitatibus nisi, deserunt doloremque ducimus voluptatum ipsam iure saepe atque cum consectetur corrupti veniam et accusamus ab doloribus nesciunt possimus?  Iure a accusantium, assumenda molestias alias earum ea harum eligendi at minima aliquam modi explicabo! Accusamus quam delectus exercitationem voluptatem eum! Quam autem incidunt tempore esse quisquam voluptatem aperiam dolorem.  Provident labore iste error incidunt asperiores aut ipsa sit neque, consequatur amet officia in illum, totam nulla libero. Molestiae eaque possimus repudiandae, sit officiis dolore officia tenetur eos distinctio placeat!",
    createdAt: new Date('2022/01/10').getTime(),
    tags: ['development', 'tips', 'js']
  },
  {
    title: "Project 3",
    slug: "project-3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sourceCode: 'https://github.com/auryncode/portofolio',
    demo: '/',
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    detail:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsa necessitatibus nisi, deserunt doloremque ducimus voluptatum ipsam iure saepe atque cum consectetur corrupti veniam et accusamus ab doloribus nesciunt possimus?Iure a accusantium, assumenda molestias alias earum ea harum eligendi at minima aliquam modi explicabo! Accusamus quam delectus exercitationem voluptatem eum! Quam autem incidunt tempore esse quisquam voluptatem aperiam dolorem.Provident labore iste error incidunt asperiores aut ipsa sit neque, consequatur amet officia in illum, totam nulla libero. Molestiae eaque possimus repudiandae, sit officiis dolore officia tenetur eos distinctio placeat!",
    createdAt: new Date('2023/01/10').getTime(),
    tags: ['development', 'tips', 'js']
  },
];
export const getProjects = (slug = null) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      slug ? resolve(data.find(item => item.slug === slug)) : resolve(data)
    }, 3000)
  })
}
