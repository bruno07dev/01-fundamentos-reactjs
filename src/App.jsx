import { Header } from './components/Header';
import { Post } from './Post';
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      
      <Post 
        author="Bruno Cardoso" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet alias dolores culpa voluptatem, suscipit, soluta nesciunt quod eveniet vero quidem, praesentium sit quibusdam officiis consectetur officia aut voluptatum expedita aperiam!"
      />
    </div>
  )
}