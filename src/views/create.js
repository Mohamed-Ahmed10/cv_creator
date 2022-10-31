import { Button } from "react-bootstrap";

const Create = () => {
    const print = () =>
    {
        window.print()
    }
    return (
        <div>Create
            <Button variant="info" onClick={print}>Print</Button>
        </div>
    );
}

export default Create;