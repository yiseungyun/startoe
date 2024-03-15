'use client'
import Part from "../Part";
import { useQuery } from "@tanstack/react-query"
import { getLearningData } from "@/app/data/getData";

export default function template() {
  const {data, error, isLoading} = useQuery({
    queryKey: ["template_data"],
    queryFn: () => getLearningData('template', '1'),
    suspense: true,
    staleTime: 5 * 60 * 1000,
  })

  if (error) return <div></div>
  if (isLoading) return <div>Loading</div>

  return (
    <>
      <Part title="문장구조" data={data}/>
    </>
  );
}
