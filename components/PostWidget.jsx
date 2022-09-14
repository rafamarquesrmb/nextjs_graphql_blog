import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ category_slug, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(category_slug, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 pb-16 flex-none relative overflow-hidden">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className="align-middle h-16 w-full rounded-full object-cover absolute"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAd).format("DD / MM / YYYY")}
            </p>
            <Link href={`post/${post.slug}`}>
              <span className="text-md transition duration-300 cursor-pointer hover:text-blue-600">
                {post.title}
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
