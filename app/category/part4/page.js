'use client'
import Part from "../Part";
import { useQuery } from "@tanstack/react-query"
import { getLearningData } from "@/app/api/data";

export default function part4() {
  const {data, error, isLoading} = useQuery({
    queryKey: ["part4data"],
    queryFn: () => getLearningData('part4', '1'),
    suspense: true,
    staleTime: 60 * 60 * 1000,
  })

  if (error) return <div></div>
  if (isLoading) return <div>Loading</div>

  return (
    <>
      <Part title="PART4" data={data}/>
    </>
  );
}
