const data = [
  {
    title: "Blog 1",
    slug: "blog-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    detail:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsa necessitatibus nisi, deserunt doloremque ducimus voluptatum ipsam iure saepe atque cum consectetur corrupti veniam et accusamus ab doloribus nesciunt possimus?  Iure a accusantium, assumenda molestias alias earum ea harum eligendi at minima aliquam modi explicabo! Accusamus quam delectus exercitationem voluptatem eum! Quam autem incidunt tempore esse quisquam voluptatem aperiam dolorem.  Provident labore iste error incidunt asperiores aut ipsa sit neque, consequatur amet officia in illum, totam nulla libero. Molestiae eaque possimus repudiandae, sit officiis dolore officia tenetur eos distinctio placeat!",
  },
  {
    title: "Blog 2",
    slug: "blog-2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    detail:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsa necessitatibus nisi, deserunt doloremque ducimus voluptatum ipsam iure saepe atque cum consectetur corrupti veniam et accusamus ab doloribus nesciunt possimus?  Iure a accusantium, assumenda molestias alias earum ea harum eligendi at minima aliquam modi explicabo! Accusamus quam delectus exercitationem voluptatem eum! Quam autem incidunt tempore esse quisquam voluptatem aperiam dolorem.  Provident labore iste error incidunt asperiores aut ipsa sit neque, consequatur amet officia in illum, totam nulla libero. Molestiae eaque possimus repudiandae, sit officiis dolore officia tenetur eos distinctio placeat!",
  },
  {
    title: "Blog 3",
    slug: "blog-3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    detail:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsa necessitatibus nisi, deserunt doloremque ducimus voluptatum ipsam iure saepe atque cum consectetur corrupti veniam et accusamus ab doloribus nesciunt possimus?Iure a accusantium, assumenda molestias alias earum ea harum eligendi at minima aliquam modi explicabo! Accusamus quam delectus exercitationem voluptatem eum! Quam autem incidunt tempore esse quisquam voluptatem aperiam dolorem.Provident labore iste error incidunt asperiores aut ipsa sit neque, consequatur amet officia in illum, totam nulla libero. Molestiae eaque possimus repudiandae, sit officiis dolore officia tenetur eos distinctio placeat!",
  },
  {
    title: "Blog 4",
    slug: "blog-4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://images.unsplash.com/photo-1735760672905-954da053c445?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detail:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsa necessitatibus nisi, deserunt doloremque ducimus voluptatum ipsam iure saepe atque cum consectetur corrupti veniam et accusamus ab doloribus nesciunt possimus?  Iure a accusantium, assumenda molestias alias earum ea harum eligendi at minima aliquam modi explicabo! Accusamus quam delectus exercitationem voluptatem eum! Quam autem incidunt tempore esse quisquam voluptatem aperiam dolorem.  Provident labore iste error incidunt asperiores aut ipsa sit neque, consequatur amet officia in illum, totam nulla libero. Molestiae eaque possimus repudiandae, sit officiis dolore officia tenetur eos distinctio placeat!",
  },
];
export const getBlogs = (slug = null) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      slug ? resolve(data.find(item => item.slug === slug)) : resolve(data)
    }, 3000)
  })
};
