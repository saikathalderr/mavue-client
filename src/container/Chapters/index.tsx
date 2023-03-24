import { CHAPTER_QUERY } from "../../grql/query/chapter.query";
import ChapterItem from "./ChapterItem";
import { IChapter } from "./interface";
import { useQuery } from "@apollo/client";
import { Add } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";

const Chapters = () => {
  const { loading, error, data } = useQuery(CHAPTER_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      {data.chapters.map((article: IChapter, idx: number) => (
        <ChapterItem
          key={idx + 1}
          article={article}
        />
      ))}
    </>
  );
};

export default Chapters;
