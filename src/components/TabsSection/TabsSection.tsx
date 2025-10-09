import styles from './TabsSection.module.css'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';

interface TabsSectionProps{
    activeTab: string;
    setActiveTab: (id: string) => void
}

const tabs = [
    {
        id: 1,
        title: "leaderboard",
        text: "Holders leaderboard"
    },
    {
        id: 2,
        title: "transfers",
        text: "Latest transfers"
    },
    {
        id: 3,
        title: "topusers",
        text: "TOP users"
    },
  
]

export const TabsSection = ({activeTab, setActiveTab}: TabsSectionProps) => {

   const {ref, onWheel} = useHorizontalScroll()
  return (
    <div
        className={styles.tabsSection}
        ref={ref}
        onWheel={onWheel}
    >

        {tabs.map((tab) => (
            <button
                key={tab.id} 
                className={`${styles.tab} ${activeTab === tab.title? styles.active : ''}`}
                onClick={() => setActiveTab(tab.title)}
            >
                <p>{tab.text}</p>
            </button>
        ))}

    </div>
  )
}
