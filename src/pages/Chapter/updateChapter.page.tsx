import { SUBMIT_CHAPTER_FORM_TITLE } from "../../constants";
import BackButton from "../../container/BackButton";
import ChapterUpdateForm from "../../container/Chapters/ChapterUpdateForm";
import { IChapter } from "../../container/Chapters/interface";
import AccountChip from "../../container/Users/AccountChip";
import { IUser } from "../../container/Users/interface";
import { CHAPTER_BY_ID_QUERY } from "../../grql/query/chapter.query";
import { useQuery } from "@apollo/client";
import { Print } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const UpdateChapterForm = () => {
  const printBlockRef = useRef(null);

  const { id: chapterId } = useParams();
  const { loading, error, data } = useQuery(CHAPTER_BY_ID_QUERY, {
    variables: {
      chapterId,
    },
  });

  const handlePrint = useReactToPrint({
    content: () => printBlockRef.current,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const chapter: IChapter = data?.chapter;
  const chapterAssignedUser: IUser | undefined | null = chapter?.assignedTo;

  return (
    <>
      <BackButton />
      <Card sx={{ borderRadius: 4 }}>
        <Box sx={{ padding: 5, my: 2 }} ref={printBlockRef}>
          <div>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ mb: 3 }}
              fontWeight="bolder"
            >
              {chapter.text ? chapter.title : SUBMIT_CHAPTER_FORM_TITLE}
            </Typography>
          </div>
          <div>
            <Typography
              variant="subtitle1"
              gutterBottom
              color="error"
              fontWeight="bolder"
            >
              Requirements 👇
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {chapter.requirements}
            </Typography>
            {chapter.text ? (
              <>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  color="secondary"
                  fontWeight="bolder"
                >
                  Answer
                </Typography>
                <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
                  {chapter.text}
                </Typography>
                <AccountChip
                  firstName={
                    chapterAssignedUser
                      ? chapterAssignedUser?.firstName
                      : "anonymous"
                  }
                  lastName={chapterAssignedUser?.lastName}
                />
              </>
            ) : null}
          </div>

          {!chapter.text ? (
            <ChapterUpdateForm
              chapterId={chapterId || ""}
              assigned={chapterAssignedUser}
            />
          ) : null}
        </Box>
        {chapter.text ? (
          <Button
            fullWidth
            variant="text"
            startIcon={<Print />}
            sx={{ mt: 2 }}
            onClick={handlePrint}
          >
            Print
          </Button>
        ) : null}
      </Card>
    </>
  );
};

export default UpdateChapterForm;
