import { useSearchParams } from 'react-router-dom';
import { Button, Input } from '@chakra-ui/react';
import { toast } from 'react-toastify';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onHandleSubmit = e => {
    e.preventDefault();
    const query = e.target.querySelector('input[name="query"]').value.trim();
    if (!query) {
      return toast.info('заполни форму поиска');
    }

    setSearchParams({ q: query });
  };

  return (
    <form style={{ margin: '20px 0' }} onSubmit={onHandleSubmit}>
      <Input
        focusBorderColor="brand.200"
        maxWidth="50%"
        marginRight="10px"
        type="text"
        name="query"
        autoComplete="off"
        defaultValue={searchParams.get("q")}
        placeholder="Movie search"
      ></Input>
      <Button
        variant="ghost"
        type="submit"
        mb="2px"
        color="brand.200"
        fontSize={[15, 20, 20]}
        _hover={{
          shadow: '1px 1px 15px 1px ',
          bg: 'brand.200',
          color: 'brand.100',
          border: '1px solid brand.100',
        }}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
