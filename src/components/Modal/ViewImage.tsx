import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />

      <ModalContent
        w="auto"
        h="auto"
        bg="transparent"
        maxW={['300px', '600px', '900px']}
        maxH={['200px', '400px', '600px']}
      >
        <ModalBody p="0">
          <Image
            src={imgUrl}
            maxW={['300px', '600px', '900px']}
            maxH={['200px', '400px', '600px']}
            borderTopRadius="base"
          />
        </ModalBody>

        <ModalCloseButton />

        <ModalFooter
          bg="pGray.800"
          h="2rem"
          py="6"
          justifyContent="flex-start"
          borderBottomRadius="base"
        >
          <Link target="_blank" href={imgUrl}>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
