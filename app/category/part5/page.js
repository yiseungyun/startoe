'use client'
import Part from "../Part";
import { useQuery } from "@tanstack/react-query"
import { getLearningData } from "@/app/api/data";

export default function part5() {
  const {data, error, isLoading} = useQuery({
    queryKey: ["part5data"],
    queryFn: () => getLearningData('part5', '1'),
    suspense: true,
    staleTime: 5 * 60 * 1000,
  })

  if (error) return <div></div>
  if (isLoading) return <div>Loading</div>

  return (
    <>
      <Part title="PART5" data={data}/>
    </>
  );
}
