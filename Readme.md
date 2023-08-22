| Endpoint                        | Description                                                    |
|---------------------------------|----------------------------------------------------------------|
| answers                         | Get all answers on the site.                                   |
| answers/{ids}                   | Get answers identified by a set of ids.                        |
| answers/{id}/accept             | Casts an accept vote on the given answer. auth required        |
| answers/{id}/accept/undo        | Undoes an accept vote on the given answer. auth required       |
| answers/{ids}/comments          | Get comments on the answers identified by a set of ids.        |
| answers/{id}/delete             | Deletes the given answer. auth required                        |
| answers/{id}/downvote/undo      | Undoes a downvote on the given answer. auth required           |
| answers/{id}/edit               | Edits the given answer. auth required                          |
| answers/{id}/flags/options      | Returns valid flag options for the given answer. auth required |
| answers/{id}/flags/add          | Casts a flag on the given answer. auth required                |
| answers/{ids}/questions         | Gets all questions the answers identified by ids are on.       |
| answers/{id}/upvote             | Casts an upvote on the given answer. auth required             |
| answers/{id}/upvote/undo        | Undoes an upvote on the given answer. auth required            |
| answers/{id}/recommend          | Casts a recommendation on the given answer. auth required      |
| answers/{id}/recommend/undo     | Undoes an recommendation on the given answer. auth required    |
| answers/{id}/suggested-edit/add | Creates a suggested edit on an existing answer. auth required  |