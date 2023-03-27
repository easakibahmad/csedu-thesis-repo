import React from "react";

const PublicationsItem = () => {
  return (
    <div className="my-6">
      <h1
        className="font-medium text-xl hover:underline hover:cursor-pointer"
        style={{ color: "#1a0dab" }}
      >
        On the ultimate convex hull algorithm in practice
      </h1>
      <span className="flex justify-start gap-3" style={{ color: "#006621" }}>
        <p className="underline">MM McQUEEN, GT Toussaint</p>
        <p> - Pattern Recognition Letters, 1985 - Elsevier</p>
      </span>
      <p className="text-sm md:w-2/3 w-3/4">
        Kirkpatrick and Seidel [13,14] recently proposed an algorithm for
        computing the convex hull of n points in the plane that runs in O(n log
        h) worst case time, where h denotes the number of points on the convex
        hull of the set.
      </p>
    </div>
  );
};

export default PublicationsItem;
