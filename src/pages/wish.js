import React, {useState} from "react";
import { ReactTyped } from "react-typed";
import { Flex, IconButton, Heading } from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons" 
import { useNavigate } from "react-router-dom";

const WishPage = () => {
    const navigate = useNavigate()
    const [showButton, setShowButton] = useState(false)

    const handleCompleted = () => {
        setShowButton(true)
    }

    return (
        <>
            <Flex minWidth='100%' height="100vh" flexDirection="column" padding="30px">
                <Flex minWidth='100%' justifyContent="space-between" alignItems="center" mb="10px">
                    <Heading size='md' color="#363062" textAlign="center">
                        Jojo's Wishes
                    </Heading>
                     { showButton && (
                        <IconButton
                            isRound={true}
                            variant='solid'
                            fontSize='20px'
                            bg="#363062"
                            color="rgb(247, 247, 247)"
                            icon={<ArrowForwardIcon />}
                            onClick={() => navigate("/memories")}
                        />
                    )}
                </Flex>
                <ReactTyped 
                    style={{textAlign: 'justify'}} 
                    typeSpeed={40} 
                    strings={[
                        "Dear <b>Sherrie Endut,</b> <br/><br/> Tepat pada hari ini, di tahun 2002 merupakan hari yang istimewa atas kelahiran wanita yang cantik, lucu, ceria, hebat, namun sangat amat bawel. Berbagai macam perjalanan dan rintangan yang luar biasa telah kamu lewati lho selama 22 tahun. Pada hari yang spesial ini, sebelum kita ngerayain bareng2, izinin aku untuk mengucapkan selamat ulang tahun yaa buat ai endut: <br/><br/> Happy birthday ya sayang yang ke-22 tahun! Semoga di umur kamu sekarang, kamu semakin cantik, pintar, rajin, dewasa, taat sama ortu dan selalu takut akan Tuhan ya. Semoga kamu selalu diberikan kebahagiaan, kedamaian, kesehatan, dan kesuksesan juga ya kapanpun dan dimanapun. Semoga harapan-harapan kamu juga akan segera tercapai di umur kamu yang sekarang. Semoga setiap umur yang kamu jalani akan selalu lebih indah dari sebelumnya. Semoga kamu terus tumbuh dan berkembang sebagai pribadi yang tangguh dan bijaksana serta dikelilingi oleh cinta dan dukungan dari orang yang menyayangi dan menghargai kamu ya. <br/><br/>  Harapan aku pribadi adalah kamu semakin dewasa dalam menghadapi masalah, selalu kuat, semakin sabar, dan pantang menyerah ya. Inget selalu pesan2 aku ketika kita ada masalah dan selalu ambil yang baik dari aku ya ai. Terima kasih ya ai udah banyak ngajarin aku tentang indahnya berbagi, berkorban, dan selalu bisa excited dalam segala hal. <br/><br/> Semoga kue, bunga, ucapan, dan hadiah ulang tahun yang aku berikan ini bisa mencerminkan happynya aku untuk merayakan ulang tahun kamu. Semoga kamu ikut happy juga ya karena ini pertama kalinya kamu rayain ultah sama pacar kamu, akhirnya kamu engga sendiri lagi deh ya. Ayuk kita rayain ultah hari ini untuk berbagi di panti ya dan makan2 bersama. Aku juga udah beli kebutuhan2 panti nya sesuai janji kita. Jangan lupa buat abadikan momen bahagia kamu ya hari ini. Semoga hari ini menjadi awal yang baru untuk kebahagiaan dan impian yang kamu inginkan. <br/><br/> Sekali lagi, happy birthday ai sayang❤️❤️❤️ <br/><br/>With Love,<br/>Johanes",
                    ]}
                    onComplete={handleCompleted}
                />
            </Flex>
        </>
    )
}

export default WishPage