import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Bruno Cardoso" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet alias dolores culpa voluptatem, suscipit, soluta nesciunt quod eveniet vero quidem, praesentium sit quibusdam officiis consectetur officia aut voluptatum expedita aperiam!"
          />
          <Post 
            author="Antônio Carlos" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. At quae aut aperiam neque inventore harum ducimus accusamus, fugit accusantium placeat, adipisci magnam vitae veritatis voluptate eveniet ipsum corporis? Asperiores, aut?"
          />
        </main>
      </div>
    </div>
  )
}