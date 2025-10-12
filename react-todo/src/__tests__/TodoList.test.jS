import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../component/TodoList';

// Test to check if the TodoList Component renders correctly;

test('renders TodoList component', () => {
    render(<TodoList />);
    // Verify component initial render
    expect(screen.getByText(/tasks: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/newTask: 0/i)).toBeInTheDocument();
    expect(screen.getByText('handleChange')).toBeInTheDocument();
    expect(screen.getByText('addTask')).toBeInTheDocument();
    expect(screen.getByText("deleteTask")).toBeInTheDocument();
});

// Test to check if the addTask works
test('increments counter', () => {
    render(<TodoList />);
    // Simulate click event
    fireEvent.click(screen.getByText('addTask'));
    // Verify if the count is incremented
    expect(screen.getByText(/add: 1/i)).toBeInTheDocument();
});

// Test to check if the deleteTask works

test('increments counter', () => {
    render(<TodoList />);
    // Simulate click event
    fireEvent.click(screen.getByText('deleteTask'));
    // Verify if the count is incremented
    expect(screen.getByText(/delete: 1/i)).toBeInTheDocument();
});


