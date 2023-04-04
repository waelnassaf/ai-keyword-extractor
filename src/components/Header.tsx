import {Heading, Image, Text} from "@chakra-ui/react";
import logo from '../assets/light-bulb.svg'

const Header = () => {
    return (
        <>
            <Image src={logo} alt="Logo" width={100} marginBottom='1rem' />
            <Heading color='white' marginBottom='1rem'>
                AI Keyword Extractor
            </Heading>
            <Text fontSize={25} textAlign='center'>
                Paste in your text below to extract keywords.
            </Text>
        </>
    )
}

export default Header