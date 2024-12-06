import { MetaFunction } from "@remix-run/node";
import { Button, Container, HStack, Input, List, ListItem, Text, } from "@yamada-ui/react"
import { ChangeEvent, useState } from "react"

export const meta: MetaFunction = () => {
    return [
      { title: "Todo App" },
      { name: "description", content: "Todo App" },
    ];
  };

const Todo = () => {
    const [todo, setTodo] = useState('')
    const [count, setCount] = useState(0)
    const [todoList, setTodoList] = useState<{ id: number; todo: string }[]>([])
    const handleChangeTodo = (e: ChangeEvent<HTMLInputElement>) => setTodo(e.currentTarget.value)
    const handleAddTodo = () => {
        if (!todo) return
        setTodoList(prev => [...prev, { id: count, todo }])
        setCount(prev => prev + 1)
        setTodo("")
    }
    return <Container>
        <HStack>
            <Input type="text" value={todo} onChange={handleChangeTodo} />
            <Button onClick={handleAddTodo}>追加</Button>
        </HStack>
        <List>
            {
                todoList.length > 0 ? todoList.map(todoItem =>
                    <ListItem key={todoItem.id}>
                        {todoItem.todo}
                    </ListItem>)
                    :
                    <ListItem>
                        <Text>Todoなし</Text>
                    </ListItem>
            }

        </List>
    </Container>
}

export default Todo