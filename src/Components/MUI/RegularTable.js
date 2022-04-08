export const RegularTable = ({users}) => {
    return (
        <>
             <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>country</td>
                        <td>currency</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.country}</td>
                            <td>{user.currency}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </>
    )
}