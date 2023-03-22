import React from "react";
import PageHeader from "../../container/PageHeader";
import { USER_PAGE_TITLE, USER_PAGE_SUB_TITLE } from "../../constants";
import Users from "../../container/Users";

const UsersPage = () => {
    return( <>
        <PageHeader title={USER_PAGE_TITLE} subtitle={USER_PAGE_SUB_TITLE} />
        <Users/>
    </>)
}

export default UsersPage