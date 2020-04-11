Enviando email com node

<br />

Rota use post('/contato');

<br />

enviar no corpo da requisição:

<br /><br />

```js
{
	"email": "email@dominio.com",
	"assunto": "Asunto do e-mail",
	"message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod semper auctor. Fusce quis rutrum massa, a condimentum enim. Pellentesque suscipit sagittis porta. Nullam id nisl vel arcu imperdiet accumsan. Nunc laoreet felis non tellus commodo dignissim. Curabitur est metus, luctus ut sagittis quis, placerat nec ligula."
}
```js