import React from 'react'
import Badge from './ui/badge'
import Heading from './ui/heading'
import { Entregables_data } from '@/data/data'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

const Entregables = () => {
  return (
    <section
      className="border-t border-input z-50 w-full"
    >
      <div
        className="container mx-auto px-4 py-12 flex items-center flex-col justify-center space-y-8 z-50"
      >
        <Badge
          text="Entregables del Programa"
        />
        <Heading
          title="Entregables"
          highlightWords={[""]}
        />
        <div className='flex flex-col gap-4 md:gap-2 items-center'>
          {
            Entregables_data.map((item, index) => (
              <div
                key={index}
                className={cn('text-center md:text-left bg-transparent p-4 flex items-center gap-4 md:gap-10 px-10 max-w-5xl', index % 2 === 0 ? 'flex-col md:flex-row' : ' flex-col md:flex-row-reverse')}
              >
                <div
                  className='aspect-square w-40 h-40 md:w-56 md:h-56 relative rounded-xl'
                >
                  <Image
                    src={item.image}
                    fill
                    alt={item.title}
                    className='rounded-xl object-cover'
                  />
                </div>
                <div>
                  <h4
                    className='text-xl md:text-2xl font-semibold'
                  >
                    {item.title}
                  </h4>
                  <Separator className='my-2 bg-gradient-to-r from-primary/30 from-5% to-90% to-transparent' />
                  <p className='text-muted-foreground'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))
          }
          <Button
            size='xl'
            asChild
            className='text-center'
          >
            <a href="#calendly">
              Agenda tu llamada
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Entregables