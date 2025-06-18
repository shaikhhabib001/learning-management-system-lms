import { Card, CardHeader } from "@/components/ui/card";
import React from "react";

function StudentBoughtCourseDetailsPage() {
  return (
    <div className="m-2">
      <h1 className="font-bold text-3xl">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <Card>
          <img
            className=""
            src="https://images.pexels.com/photos/6327598/pexels-photo-6327598.jpeg?_gl=1*ins22*_ga*NTU1MzMwNTczLjE3NTAyNDk2MDI.*_ga_8JE65Q40S6*czE3NTAyNDk2MDIkbzEkZzEkdDE3NTAyNDk2MzgkajI0JGwwJGgw"
          />
          <CardHeader></CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default StudentBoughtCourseDetailsPage;
