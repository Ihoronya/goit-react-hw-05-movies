import PropTypes from 'prop-types';
import {} from 'react-router-dom';

import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';

const MovieDetails = ({ movie }) => {
  // const location = useLocation();
  // const backLink = useRef(location.state?.from ?? '/');

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      {movie.length !== 0 && (
        <Container maxW="container.lg">
          <Button
            variant="ghost"
            color="brand.200"
            fontSize={[15, 20, 20]}
            type="button"
            mb="2px"
            _hover={{
              shadow: '1px 1px 15px 1px ',
              bg: '#FFE4C4',
              color: 'brand.100',
              border: '1px solid brand.100',
            }}
            onClick={handleGoBack}
          >
            Go back
          </Button>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            mt={2}
          >
            {movie.poster_path && (
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '250px' }}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <Stack>
              <CardBody>
                <Text
                  bgGradient="linear(to-br, brand.100, brand.200)"
                  bgClip="text"
                  fontSize={['18', '26', '32']}
                  fontWeight="extrabold"
                >
                  {movie.title}
                </Text>
                <Text py="2">
                  User Score: {Math.round(movie.vote_average) * 10}%
                </Text>
                <Text
                  bgGradient="linear(to-br, brand.100, brand.200)"
                  bgClip="text"
                  fontSize={['18', '26', '32']}
                  fontWeight="extrabold"
                >
                  Overview:
                </Text>
                <Text py="2">{movie.overview}</Text>
                <Box>
                  <Text
                    bgGradient="linear(to-br, brand.100, brand.200)"
                    bgClip="text"
                    fontSize={['18', '26', '32']}
                    fontWeight="extrabold"
                  >
                    Genres:{' '}
                  </Text>
                  <SimpleGrid
                    columns={[1, 2, 4, 4]}
                    spacing={[4, null, 6]}
                    py="4"
                  >
                    {movie.genres &&
                      movie.genres.map(genre => (
                        <Stack key={genre.id}>
                          <Text size="ls">{genre.name}</Text>
                        </Stack>
                      ))}
                  </SimpleGrid>
                </Box>
              </CardBody>
            </Stack>
          </Card>
        </Container>
      )}
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};

export default MovieDetails;
