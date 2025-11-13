import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



type CarouselFormProps = {
    children : React.ReactNode;
}

function CarouselForm({children} : CarouselFormProps ) {

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent className="w-full max-w-xs">
        {children} 
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext>Next</CarouselNext>
    </Carousel>
  )
}

export default CarouselForm;