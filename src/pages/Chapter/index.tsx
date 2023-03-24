import React from "react";
import { CHAPTER_PAGE_TITLE, CHAPTER_PAGE_SUB_TITLE } from "../../constants";
import PageHeader from "../../container/PageHeader";
import Chapters from "../../container/Chapters";

const ChaptersPage = () => {
    return (
        <>
            <div>
                <PageHeader title={CHAPTER_PAGE_TITLE} subtitle={CHAPTER_PAGE_SUB_TITLE} />
                <Chapters/>
            </div>
        </>
    )
}

export default ChaptersPage