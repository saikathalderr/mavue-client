import ChapterItem from "./ChapterItem";
import { CHAPTER_QUERY } from "./graphql/chapter.query";
import { IChapter } from "./interface";
import { useQuery } from "@apollo/client";
import {Button, Stack} from "@mui/material";
import {
  Add
} from "@mui/icons-material";

const Chapters = () => {
  const { loading, error, data } = useQuery(CHAPTER_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <Stack direction="row-reverse" spacing={2}>
        <Button variant="contained" startIcon={<Add />}>Create</Button>
      </Stack>
      {data.chapters.map((article: IChapter, idx: number) => (
        <ChapterItem key={idx + 1} article={article} />
      ))}
    </>
  );
};

export default Chapters;
