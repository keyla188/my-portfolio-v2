import { useEffect } from 'react';
import InfiniteMarquee from 'vanilla-infinite-marquee';
import { IconBrandAngular } from '@tabler/icons-react';
import { IconBrandReact } from '@tabler/icons-react';
import { IconBrandTypescript } from '@tabler/icons-react';
import { IconBrandFigma } from '@tabler/icons-react';
import { IconBrandHtml5 } from '@tabler/icons-react';
import { IconBrandCss3 } from '@tabler/icons-react';
import { IconBrandMysql } from '@tabler/icons-react';
import { IconBrandMongodb } from '@tabler/icons-react';
import { IconBrandPhp } from '@tabler/icons-react';
import { IconBrandNodejs } from '@tabler/icons-react';
import "./marquee.css"

function Marquee() {
    useEffect(() => {
        const marquee = new InfiniteMarquee({
            element: '.marquee-container',
            speed: 90000,
            smoothEdges: true,
            direction: 'right',
            gap: '10px',
            pauseOnHover: true,
            duplicateCount: 2,
            mobileSettings: {
                direction: 'top',
                speed: 95000
            },
            on: {
                beforeInit: () => {
                    //console.log('Not Yet Initialized');
                },
        
                afterInit: () => {
                    //console.log('Initialized');
                }
            }
        });
        return () => {
            marquee.destroy();
        }
    }, []);

    
    return(
        <div>
            <div className="marquee-container">
                <IconBrandAngular stroke={1.5} size={60} />
                <IconBrandReact stroke={1.5} size={60} />
                <IconBrandTypescript stroke={1.5} size={60} />
                <IconBrandFigma stroke={1.5} size={60} />
                <IconBrandHtml5 stroke={1.5} size={60} />
                <IconBrandCss3 stroke={1.5} size={60} />
                <IconBrandMysql stroke={1.5} size={60} />
                <IconBrandMongodb stroke={1.5} size={60} />
                <IconBrandPhp stroke={1.5} size={60} />
                <IconBrandNodejs stroke={1.5} size={60} />
            </div>
        </div>
    );
}

export default Marquee