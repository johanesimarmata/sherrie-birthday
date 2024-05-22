import React, { Suspense } from "react";
import { Flex } from "@chakra-ui/react";
import Sherrie1 from "../sherrie-videos/sherrie-1.MOV"
import Sherrie2 from "../sherrie-videos/sherrie-2.MOV"
import Sherrie3 from "../sherrie-videos/sherrie-3.MOV"
import Sherrie4 from "../sherrie-videos/sherrie-4.MOV"
import Invitation1 from "../sherrie-images/invitation-1.png"
import Invitation2 from "../sherrie-images/invitation-2.png"

const StoriesLazy = React.lazy(() => import("react-insta-stories"));
// const WithSeeMore = React.lazy(() =>
//   import("react-insta-stories").then((module) => ({
//     default: module.WithSeeMore,
//   }))
// );


const MemoriesPage = () => {
    return (
        <Flex minWidth='100%' height="100vh" flexDirection="column">
            <Suspense>
                <StoriesLazy
                    preloadCount={3}
                    loop
                    keyboardNavigation
                    defaultInterval={8000}
                    stories={stories2}
                    onStoryEnd={(s, st) => console.log("story ended", s, st)}
                    onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
                    onStoryStart={(s, st) => console.log("story started", s, st)}
                    onPrevious={() => console.log("previous button pressed")}
                    storyContainerStyles={{ borderRadius: 8, overflow: "hidden" }}
                    height="100%"
                    width="100%"
                />
            </Suspense>
        </Flex>
    )
}

// const Story2 = ({ action, isPaused }) => {
//     return (
//       <div style={{ ...contentStyle, background: "Aquamarine", color: "#333" }}>
//         <h1>You get the control of the story.</h1>
//         <p>
//           Render your custom JSX by passing just a{" "}
//           <code style={{ fontStyle: "italic" }}>content</code> property inside
//           your story object.
//         </p>
//         <p>
//           You get a <code style={{ fontStyle: "italic" }}>action</code> prop as an
//           input to your content function, that can be used to play or pause the
//           story.
//         </p>
//         <h1>{isPaused ? "Paused" : "Playing"}</h1>
//         <h4>v2 is out 🎉</h4>
//         <p>React Native version coming soon.</p>
//       </div>
//     );
//   };
// https://github.com/mohitk05/react-insta-stories/blob/master/example/src/App.js
// https://mohitk05.github.io/react-insta-stories/

const stories2 = [
    {
      content: () => {
        return(
          <div style={{
            background: "black", 
            height: "100%", 
            width: "100%",
            color: "white", 
            justifyContent: "center", 
            alignItems: "center", 
            display: "flex",
            fontSize: "24px",
            fontFamily: "monospace",
            textAlign: "center",
            padding: "30px"
          }}>
            <h1>Here's a little memory of all the moments we've shared together 🥳 🎉 🎁</h1>
          </div>
        )
      }
    },
    {
      url: Sherrie1,
      type: "video",
    },
    {
      url: Sherrie2,
      type: "video",
    },
    {
      url: Sherrie3,
      type: "video",
    },
    {
      url: Sherrie4,
      type: "video",
    },
    {
      content: () => {
        return(
          <div style={{
            background: "black", 
            height: "100%", 
            width: "100%",
            color: "white", 
            justifyContent: "center", 
            alignItems: "center", 
            display: "flex",
            fontSize: "24px",
            fontFamily: "monospace",
            textAlign: "center",
            padding: "30px"
          }}>
            <h1>Now, let's see our rundown for today. May today be the most special day for you 🥳 🎉 🎊 🎂</h1>
          </div>
        )
      }
    },
    {
      url: Invitation1,
    },
    {
      url: Invitation2,
    },
    // {
    //   content: ({ action, isPaused }) => {
    //     return (
    //       <div style={contentStyle}>
    //         <h1>The new version is here.</h1>
    //         <p>This is the new story.</p>
    //         <p>Now render React components right into your stories.</p>
    //         <p>Possibilities are endless, like here - here's a code block!</p>
    //         <pre>
    //           <code style={code}>console.log('Hello, world!')</code>
    //         </pre>
    //         <p>Or here, an image!</p>
    //         <br />
    //         <img
    //           style={image}
    //           src="https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //         ></img>
    //         <h3>Perfect. But there's more! →</h3>
    //       </div>
    //     );
    //   },
    // },
    // {
    //   content: ({ action, story }) => {
    //     return (
    //       <>
    //         <WithSeeMore story={story} action={action}>
    //           <div style={{ background: "snow", padding: 20, height: "100%" }}>
    //             <h1 style={{ marginTop: "100%", marginBottom: 0 }}>🌝</h1>
    //             <h1 style={{ marginTop: 5 }}>
    //               We have our good old image and video stories, just the same.
    //             </h1>
    //           </div>
    //         </WithSeeMore>
    //       </>
    //     );
    //   },
    //   seeMoreCollapsed: ({ toggleMore, action }) => (
    //     <p style={customSeeMore} onClick={() => toggleMore(true)}>
    //       A custom See More message →
    //     </p>
    //   ),
    //   seeMore: ({ close }) => (
    //     <div
    //       style={{
    //         maxWidth: "100%",
    //         height: "100%",
    //         padding: 40,
    //         background: "white",
    //       }}
    //     >
    //       <h2>Just checking the see more feature.</h2>
    //       <p style={{ textDecoration: "underline" }} onClick={close}>
    //         Go on, close this popup.
    //       </p>
    //     </div>
    //   ),
    //   duration: 5000,
    // },
    // {
    //   url: "https://picsum.photos/1080/1920",
    //   seeMore: ({ close }) => (
    //     <div
    //       style={{
    //         maxWidth: "100%",
    //         height: "100%",
    //         padding: 40,
    //         background: "white",
    //       }}
    //     >
    //       <h2>Just checking the see more feature.</h2>
    //       <p style={{ textDecoration: "underline" }} onClick={close}>
    //         Go on, close this popup.
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   url:
    //     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    //   type: "video",
    // },
    // {
      // content: Story2,
    // },
    // {
    //   url: "https://plus.unsplash.com/premium_photo-1676231417481-5eae894e7f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1676321626679-2513969695d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1676359912443-1bf438548584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1676316698468-a907099ad5bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    //   preloadResource: false,
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1676310483825-daa08914445e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2920&q=80",
    //   preloadResource: false,
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1676321685222-0b527e61d5c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    //   preloadResource: false,
    // },
];

// const image = {
//     display: "block",
//     maxWidth: "100%",
//     borderRadius: 4,
//   };
  
// const code = {
//     background: "#eee",
//     padding: "5px 10px",
//     borderRadius: "4px",
//     color: "#333",
// };
  
// const contentStyle = {
//     background: "#333",
//     width: "100%",
//     padding: 20,
//     color: "white",
//     height: "100%",
// };
  
// const customSeeMore = {
//     textAlign: "center",
//     fontSize: 14,
//     bottom: 20,
//     position: "relative",
// };

export default MemoriesPage