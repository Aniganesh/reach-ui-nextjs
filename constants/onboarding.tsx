import React from "react";
export const onboardingVideos: { url: string; src: JSX.Element }[] = [
  {
    url: "https://player.vimeo.com/video/265111898?h=50b97b17c7",
    src: (
      <p>
        <a href="https://vimeo.com/265111898">Oh Yeah? - Vertical Video</a> from{" "}
        <a href="https://vimeo.com/matthewjpalmer">Matthew Palmer</a> on{" "}
        <a href="https://vimeo.com">Vimeo</a>.
      </p>
    ),
  },
  {
    url: "https://player.vimeo.com/video/357788702?h=2914c7b3c7",
    src: (
      <p>
        <a href="https://vimeo.com/357788702">Vertical video placeholder</a>{" "}
        from <a href="https://vimeo.com/user29492148">EF Education First</a> on{" "}
        <a href="https://vimeo.com">Vimeo</a>.
      </p>
    ),
  },
  {
    url: "https://player.vimeo.com/video/613729649?h=383438db14&color=ffffff&byline=0",
    src: (
      <p>
        <a href="https://vimeo.com/613729649">Vertical Video</a>from{" "}
        <a href="https://vimeo.com/idearocket">IdeaRocket</a>on{" "}
        <a href="https://vimeo.com">Vimeo</a>.
      </p>
    ),
  },
];
