// import { Box, Container, Heading, Link, Text, VStack } from '@chakra-ui/react'
// import { InferGetServerSidePropsType } from 'next'
// import Image from 'next/image'
// import { Site } from '../../types'
// import { getSite } from '../api/sites'

// export default function BlogItemPage({
//   post,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   return (
//     <Container maxW="container.md" p={6}>
//       <VStack spacing={6} align="flex-start">
//         <Link color="gray.500" fontSize="sm" href="/">
//           ← Back
//         </Link>
//         <VStack spacing={2} align="flex-start">
//           <Text color="gray.500" fontSize="sm">
//             Thursday, June 23, 2022
//           </Text>
//           <Heading fontSize="3xl">{post.title}</Heading>
//           <Text>{post.description}</Text>
//           <Text color="gray.500" fontSize="sm">
//             By Adam Wathan
//           </Text>
//         </VStack>

//         <Box>
//           <Image
//             src={post.image}
//             alt="Blog header image"
//             width={800}
//             height={400}
//           ></Image>
//         </Box>

//         <Text color="gray.600" fontSize="md">
//           When I was early in my programming career, I loved following
//           thoughtbot. They were always writing interesting programming articles,
//           producing fantastic screencasts, and publishing incredible books. I
//           could tell they really cared about their craft and it inspired the
//           hell out of me.
//         </Text>
//       </VStack>
//     </Container>
//   )
// }

// export async function getServerSideProps({ params }: any) {
//   const postId = Number(params.postId)
//   const site: Site | null = await getSite()

//   const post: any = site.posts.find((post) => post.id === postId)

//   const props: any = { post }
//   return {
//     props,
//   }
// }

import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import Layout from '../../components/Layout'

const books = [
  {
    id: 1,
    title: 'The $100 Startup',
    abstract:
      'In The $100 Startup, Chris Guillebeau shows you how to lead of life of adventure, meaning and purpose – and earn a good living.',
    tag: 'business',
    author: 'Chris Guillebeau',
    url: 'https://play.google.com/store/books/details?id=2YeBy-RlgkQC&source=gbs_api',
    thumbnail:
      'http://books.google.com/books/content?id=2YeBy-RlgkQC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE708dxWlPlj2jW6V7eRwiYB7l76qWZHr1XxmVAClpSMpQyVyGL0oIlnUrc_auYJsrb_OgMQXpWUAnk4O8zoXSCEpiv0J-tOcX0-I1XnJadQcWC1EQRiBMZvj7EGeICFSDQXfCxVI&source=gbs_api',
  },
  {
    id: 2,
    title: 'The Lean Startup',
    abstract:
      'Most startups fail. But many of those failures are preventable.  The Lean Startup is a new approach being adopted across the globe, changing the way companies are built and new products are launched.',
    tag: 'business',
    author: 'Eric Ries',
    url: 'https://play.google.com/store/books/details?id=r9x-OXdzpPcC&source=gbs_api',
    thumbnail:
      'http://books.google.com/books/content?id=r9x-OXdzpPcC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70tfn2A2fRV10tSwCDlpXFp1WAyKcnYlAKWieGiQhQv7cWLN0ieaR9ewhDXIOgT5Q1OhSKU3vxpQAqzZJiE_4g1XC0HoBW2FKl2LsCVVKTrQwXuGr4nGoZRXK7SzZ-G0NtjpIyc&source=gbs_api',
  },
  {
    id: 3,
    title: 'The Mom Test',
    abstract:
      "The Mom Test is a quick, practical guide that will save you time, money, and heartbreak. They say you shouldn't ask your mom whether your business is a good idea, because she loves you and will lie to you.",
    tag: 'business',
    author: 'Rob Fitzpatrick',
    url: 'https://www.amazon.ca/Intelligent-Investor-Definitive-Value-Investing/dp/0060555661',
    thumbnail:
      'http://books.google.com/books/publisher/content?id=Z5nYDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73GzfMA3iaiGkXHQf0oRVSmwPRgd59Sh4qz398GhrEpjcZfKQIg1X7__1v2-DiXUj2M06is49nhTwGvMqNeyQ0okZ3aKSnSU5lnNG1Pi561LqYzC5D2avTOjLnKGzfNjXBdZQLt&source=gbs_api',
  },
]

interface BookPostProps {
  book: any
}

const BookPost: FunctionComponent<BookPostProps> = ({
  book,
}: BookPostProps) => {
  return (
    <VStack spacing={4} align="flex-start">
      <Center w="full" h={300} p={6} backgroundColor="gray.100">
        <Image src={book.thumbnail} alt="Book Thumbnail" w={125}></Image>
      </Center>
      <Text fontSize="x-large" fontWeight={600}>
        {book.title} by {book.author}
      </Text>
      <Box maxW="container.sm">
        <Text align="left">{book.abstract}</Text>
      </Box>
      <Link href={book.url}>View on Google Books →</Link>
    </VStack>
  )
}

interface BookMainProps {}

const BookMain: FunctionComponent<BookMainProps> = () => {
  return (
    <Layout>
      <Container maxW="container.md" py={4} centerContent>
        <Heading>Top 3 Books to learn Business in 2022</Heading>
        <VStack spacing={12} mt={6}>
          {books.map((book: any, i: number) => (
            <BookPost key={`book_${i}`} book={book} />
          ))}
          <Divider />
          <Button colorScheme="brand">Try Nerd Corner free for 7 days</Button>
        </VStack>
      </Container>
    </Layout>
  )
}

export default BookMain
