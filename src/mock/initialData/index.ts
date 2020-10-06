const initialData = {
  alternatives: [
    {
      id: "alt-1",
      content: "Nunc commodo consectetur taciti tempor fermentum fames.",
    },
    {
      id: "alt-2",
      content:
        "Vel a tortor non aptent metus aenean nibh hac dictumst, convallis class lacus nullam.",
    },
    {
      id: "alt-3",
      content:
        "Magna tristique facilisis sit velit nostra, rutrum ut sapien libero aliquam.",
    },
    {
      id: "alt-4",
      content:
        "Eleifend pretium habitasse tempor cursus ultricies pulvinar a consectetur, nunc ullamcorper primis ut pharetra.",
    },
    {
      id: "alt-5",
      content:
        "Aptent non vel etiam aenean duis mi curabitur, senectus tristique vestibulum blandit maecenas.",
    },
    {
      id: "alt-6",
      content:
        "Sociosqu dui vulputate enim ultricies dictumst enim massa mi sem velit mauris.",
    },
    {
      id: "alt-7",
      content:
        "Conubia senectus nostra nunc netus habitant litora sit fermentum magna.",
    },
    {
      id: "alt-8",
      content:
        "Ornare quis elementum quisque, lacus etiam tempus lacinia ante.",
    },
    {
      id: "alt-9",
      content:
        "Potenti sociosqu vehicula varius. interdum sem integer sollicitudin at nisi potenti sit luctus, amet etiam.",
    },
    {
      id: "alt-10",
      content:
        "Dapibus habitasse donec suspendisse quam primis, torquent consequat quam imperdiet.",
    },
  ],
  questions: [
    {
      id: "qst-1",
      title:
        "Lorem ipsum at nunc tellus a himenaeos aliquet nunc, eros enim placerat cubilia congue malesuada ut quisque, vel egestas condimentum tristique fermentum litora iaculis. erat egestas quisque integer eros nulla imperdiet egestas est morbi metus justo.",
      alternativeIds: ["alt-1", "alt-2", "alt-3", "alt-4", "alt-5"],
    },
    {
      id: "qst-2",
      title:
        "Eros enim placerat cubilia congue malesuada ut quisque, vel egestas condimentum tristique fermentum litora iaculis. erat egestas quisque integer eros nulla imperdiet egestas est morbi, metus justo velit proin tellus ullamcorper iaculis eget, inceptos sagittis ante morbi fermentum est malesuada sodales.",
      alternativeIds: ["alt-6", "alt-7", "alt-8", "alt-9", "alt-10"],
    },
  ],
  // Facilitate reordering of the questions
  questionsOrder: ["qst-1", "qst-2"],
};

export default initialData;
