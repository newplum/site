import Home from '@/views/Home'
import About from '@/views/About'
import Message from '@/views/Message'
import Project from '@/views/Project'
import Blog from '@/views/Blog'
export default  [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ]