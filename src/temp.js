// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import { Image, Flex } from "@chakra-ui/react";

// const SlideData = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80"
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80"
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
//     }
//   ];

import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const MemoriesPage = () => {
    // return  (
    //     <Flex color="white" minWidth='100%' height="90vh" alignItems='center' justifyContent="center" flexDirection="column" gap="20px">
    //         <Carousel infiniteLoop preventMovementUntilSwipeScrollTolerance swipeScrollTolerance={50}>
    //             {SlideData.map((slide) => {
    //             return <Image src={slide.image} height="auto" width="100%" />;
    //             })}
    //         </Carousel>
    //     </Flex>
    // )


    // As we have used custom buttons, we need a reference variable to
    // change the state

    console.log("sebelum use state")
    const [slider, setSlider] = React.useState(null)
    console.log("setelah use state")


    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
        title: 'Design Projects 1',
        text:
            "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image:
            'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        },
        {
        title: 'Design Projects 2',
        text:
            "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image:
            'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
        },
        {
        title: 'Design Projects 3',
        text:
            "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image:
            'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        },
    ];

    return (
        <Box
        position={'relative'}
        height={'100vh'}
        width={'full'}
        overflow={'hidden'}>
        {/* CSS files for react-slick */}
        {/* Left Icon */}
        {/* <IconButton
            aria-label="left-arrow"
            variant="ghost"
            position="absolute"
            left={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickPrev()}>
            <BiLeftArrowAlt size="40px" />
        </IconButton> */}
        {/* Right Icon */}
        {/* <IconButton
            aria-label="right-arrow"
            variant="ghost"
            position="absolute"
            right={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickNext()}>
            <BiRightArrowAlt size="40px" />
        </IconButton> */}
        {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                <Box
                    key={index}
                    height={'6xl'}
                    position="relative"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundImage={`url(${card.image})`}>
                    {/* This is the block you need to change, to customize the caption */}
                    {/* <Container size="container.lg" height="600px" position="relative">
                    <Stack
                        spacing={6}
                        w={'full'}
                        maxW={'lg'}
                        position="absolute"
                        top="50%"
                        transform="translate(0, -50%)">
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        {card.title}
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                        {card.text}
                        </Text>
                    </Stack>
                    </Container> */}
                </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default MemoriesPage