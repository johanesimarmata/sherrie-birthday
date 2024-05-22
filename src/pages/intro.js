import { Flex, Heading, Image, Icon, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, Button, HStack, PinInput, PinInputField } from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons" 
import { useToast } from "@chakra-ui/react";
import { FaPencilAlt } from "react-icons/fa";
import React, {useState, useEffect, useRef} from "react";
import { useDisclosure } from "@chakra-ui/react";
import SherrieImage from "../sherrie-images/sherrie-intro.JPG"
import { useNavigate } from "react-router-dom";

const IntroPage = () => {
    const [currentNameIdx, setCurrentNameIdx] = useState(0)
    const nameList = ["Nak Shopee", "Ndut", "Mbrot", "Mbul"]
    const [name, setName] = useState(nameList[currentNameIdx])
    const [remainingDays, setRemainingDays] = useState(0)
    const [timer, setTimer] = useState("00:00:00");
    const timerRef = useRef(null);
    const toast = useToast()

    const { isOpen: isOpenModalNama, onOpen: onOpenModalNama, onClose: onCloseModalNama } = useDisclosure()
    const { isOpen: isOpenModalPassword, onOpen: onOpenModalPassword, onClose: onCloseModalPassword } = useDisclosure()


    const onChangeName = (newName) => {
        const tempIdx = currentNameIdx + 1
        if (currentNameIdx < (nameList.length - 1)) {
            setName(nameList[tempIdx])
            setCurrentNameIdx(tempIdx)
        } else {
            setName(newName)
            setCurrentNameIdx(tempIdx)
        }
    }

    const getTimeRemaining = (e) => {
        const total =
            Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(
            (total / 1000 / 60) % 60
        );
        const hours = Math.floor(
            (total / 1000 / 60 / 60) % 24
        );
        const days = Math.floor(
            (total / 1000 / 60 / 60 / 24) % 30
        )
        return {
            total,
            days,
            hours,
            minutes,
            seconds,
        };
    };

    const startTimer = (e) => {
        let { total, days, hours, minutes, seconds } =
            getTimeRemaining(e);
        if (total >= 0) {
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : "0" + hours) +
                ":" +
                (minutes > 9
                    ? minutes
                    : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
            setRemainingDays(days)
        }
    };

    const clearTimer = (e) => {
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next
        // setTimer("00:00:10");
 
        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (timerRef.current) clearInterval(timerRef.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        timerRef.current = id;
    };

    useEffect(() => {
        let deadline = new Date();
        deadline.setDate(23)
        deadline.setMonth(4)
        deadline.setFullYear(2024)
        deadline.setHours(10)
        deadline.setMinutes(30)
        deadline.setSeconds(0)
        clearTimer(deadline);
        // eslint-disable-next-line
    }, []);

    const getRemainingDays = () => {
        if (remainingDays > 1) {
            return remainingDays + " days remaining"
        } else if (remainingDays === 1) {
            return remainingDays + " day remaining"
        }

        return ""
    }

    const handleOpenModalPassword = () => {
        const expectedTime = new Date(2024, 4, 23, 10, 30, 0, 0).getTime()
        const currentTime = Date.now()

        if (expectedTime <= currentTime) {
            onOpenModalPassword()
            return
        }

        toast({
            title: `Bandel kamu, belum ultah juga!`,
            status: "error",
            isClosable: true,
            position: 'top'
        })
    }

    return (
        <>
            <Flex color="white" minWidth='100%' height="90vh" alignItems='center' justifyContent="center" flexDirection="column" gap="20px">
                <Flex flexDirection="row" alignItems="center" justifyContent="space-between">
                    <Heading size='xl' color="#363062" textAlign="center">
                        Hello, {name}!
                    </Heading>
                    {currentNameIdx < 4 && <IconButton backgroundColor="transparent" icon={<Icon boxSize={5} as={FaPencilAlt} color="#363062" />} onClick={onOpenModalNama}/> }
                </Flex>
                <Image
                    borderRadius='full'
                    boxSize='250px'
                    src={SherrieImage}
                    alt='Sherrie Intro Page'
                />
                <Heading color="#363062" size="md">{getRemainingDays()}</Heading>
                <HStack>
                    <PinInput size="md" manageFocus={true} value={timer.replace(":", "").replace(":", "")} color="#363062" variant="filled" colorScheme="white" type="number">
                        <PinInputField _hover={{ _active: false }} _focusVisible={{_active: false}} readOnly backgroundColor="#363062"/>
                        <PinInputField _hover={{ _active: false }} _focusVisible={{_active: false}}  readOnly backgroundColor="#363062"/>
                        <Heading color="#363062">:</Heading>
                        <PinInputField _hover={{ _active: false }} _focusVisible={{_active: false}}  readOnly backgroundColor="#363062"/>
                        <PinInputField _hover={{ _active: false }} _focusVisible={{_active: false}}  readOnly backgroundColor="#363062"/>
                        <Heading color="#363062">:</Heading>
                        <PinInputField _hover={{ _active: false }} _focusVisible={{_active: false}}  readOnly backgroundColor="#363062"/>
                        <PinInputField _hover={{ _active: false }} _focusVisible={{_active: false}}  readOnly backgroundColor="#363062"/>
                    </PinInput>
                </HStack>
                <Button marginTop="20px" fontWeight="bold" size="md" width="250px" height="45px" rightIcon={<ArrowForwardIcon />} colorScheme="gray" color="#363062" variant='solid' onClick={handleOpenModalPassword}>
                    Let's Get Started
                </Button>
            </Flex>
            <ModalEditNama isOpen={isOpenModalNama} onClose={onCloseModalNama} name={name} setName={onChangeName} nameIdx={currentNameIdx}/>
            <ModalPassword isOpen={isOpenModalPassword} onClose={onCloseModalPassword}/>
        </>
    )
}

const ModalEditNama = ({isOpen, onClose, name, setName, nameIdx}) => {
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [newName, setNewName] = useState(name)

    const onSave = () => {
        setName(newName)
        onClose()
    }

    const lastChanceAttempt = 4 - nameIdx

    return (
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Ganti namanya, {name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Tulis nama kamu disini</FormLabel>
                    <Input ref={initialRef} placeholder='Namamu dut' onChange={(e) => setNewName(e.target.value)} />
                    {nameIdx > 0 && <FormLabel color="red" fontSize="0.8rem">Kesempatan kamu tinggal {lastChanceAttempt}</FormLabel>}
                </FormControl>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onSave}>
                Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

const ModalPassword = ({isOpen, onClose}) => {
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const toast = useToast()
    const [isButtonLoading, setIsButtonLoading] = useState(false)
    const navigate = useNavigate()

    const onCompletedPassword = (finalPassword) => {
        if (finalPassword === "171223") {
            setIsButtonLoading(true)
            setTimeout(() => {
                setIsButtonLoading(false)
                navigate("/birthday-wish")
            }, 3000)

            toast({
                title: `Yey kamu bener`,
                status: "success",
                isClosable: true,
                position: 'top'
            })
            return
        } else if (finalPassword === "230502") {
            toast({
                title: `Geer lu, bukan tanggal lahir lu`,
                status: "error",
                isClosable: true,
                position: 'top'
            })
            return
        }

        toast({
            title: `Salah, kamu gainget tanggal jadian kita?`,
            status: "error",
            isClosable: true,
            position: 'top'
        })
    }

    return (
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Password?</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
                <HStack justifyContent="space-evenly">
                    <PinInput type='numeric' onComplete={onCompletedPassword} isDisabled={isButtonLoading}>
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                </HStack>
            </ModalBody>
            <ModalFooter justifyContent="center">
                <Button
                    isLoading={isButtonLoading}
                    loadingText='Submitting'
                    colorScheme='gray'
                    onClick={onCompletedPassword}
                >
                    Submit
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default IntroPage