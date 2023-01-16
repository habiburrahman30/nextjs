import Link from "next/link";
import { use } from "react";
import { getUsers } from "../services/user_service";

const UserComponent = () => {
    const users = use(getUsers())
    return <div>
        <ul>
            {users.map((user) => <li key={user.id}><Link href={`/user/${user.id}`}>{user.name}</Link></li>)}
        </ul>
    </div>;
}
export default UserComponent;