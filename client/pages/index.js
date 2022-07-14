import styles from '../styles/Home.module.css'
import { GET_TASKS } from '../graphql/queries'
import client from '../apolloClient'
import { useLazyQuery } from '@apollo/client'
import Task from '../components/Task/Task'
import Filters from '../components/Filters/Filters'
import AddTodo from '../components/AddTodo/AddTodo'
import Sort from '../components/Sort/Sort'

export default function Home(props) {

  const [getTodos, { data }] = useLazyQuery(GET_TASKS, {
    fetchPolicy: 'no-cache'
  })

  const getRenderData = () => {
    if (data) return data.getAllTasks
    return props.data.getAllTasks
  }

  return (
    <div className={styles.container}>
      <AddTodo fetchAllTasks={getTodos} />
      <Filters fetchFilteredTasks={getTodos} />
      <div className={styles.todoListContainer}>
        {getRenderData().map(task => <Task key={task.id} taskData={task} fetchAllTasks={getTodos} />)}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_TASKS,
  });

  return {
    props: {
      data,
    },
  };
}