"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const ProfilePage = ({params}) => {
    const router = useRouter();


    const search = useSearchParams();

    const name = search.get("name")
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(
                `/api/users/${params.id}/posts`
            );

            const data = await response.json();

            setPosts(data);
        };

        if (params.id) fetchPosts();
    }, []);

    const desc = `welcome to ${name}'s personalized profile page. Explore ${name}'s exceptional prompts and be inspires by the power of there imagination`


    return (
        <Profile
            name={name}
            desc={desc}
            data={posts}
            handleEdit={()=> {}}
            handleDelete={() => {}}
        />
    );
};

export default ProfilePage;
