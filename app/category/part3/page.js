'use client'
import Part from "../Part";
import { useQuery } from "@tanstack/react-query"
import { getLearningData } from "@/app/api/data";

export default function part3() {
  const {data, error, isLoading} = useQuery({
    queryKey: ["part3data"],
    queryFn: () => getLearningData('part3', '1'),
    suspense: true,
    staleTime: 5 * 60 * 1000,
  })

  if (error) return <div></div>
  if (isLoading) return <div>Loading</div>

  return (
    <>
      <Part title="PART3" data={data}/>
    </>
  );
}
