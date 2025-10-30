import "./EmptyState.css";

export function EmpyState() {
  return (
    <section className="empty-state">
      <p>Ainda não tem tarefas cadastradas, adicione para começar!</p>
      <img src="Empty.png" alt="" />
    </section>
  );
}
