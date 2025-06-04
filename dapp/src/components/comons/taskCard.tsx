import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";


interface TaskCardProps {
    title: string;
    description: string;
    createdAt: string;
    dueDate: string;
    isCompleted: boolean;
    handleCompleteTask: (id: string) => void;
}

export function TaskCard({ title, description, createdAt, dueDate, isCompleted, handleCompleteTask }: TaskCardProps) {
    return (
        <Card>
            <CardHeader className="flex">
                <div className="flex  ">
                    <h1 className="text-lg font-bold">{title}</h1>
                    {
                    isCompleted ? (
                        <Badge variant="default">
                            concluída
                        </Badge>
                    ) : (
                        <Badge variant="default">
                            pendente
                        </Badge>
                    )
                }

                </div>
            

            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <div className="flex gap-2">
                    <p className="text-sm text-muted-foreground">Data criada: {createdAt}</p>
                    <p className="text-sm text-muted-foreground">Data de vencimento: {dueDate}</p>
                </div>
               
            </CardFooter>
        </Card>
    )
}