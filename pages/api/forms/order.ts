export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        // fields[name_2] - сделка
        // fields[1096799_1][571867] - номер телефона
        // fields[1890587_1] - данные
        // fields[1890589_3] - персональные данные
        // https://forms.amocrm.ru/rvzdxdv
        // maximlogistic.amocrm.ru
        try {
            const formData = new FormData();

            formData.append('fields[name_2]', 'Получить 5 лучших предложений');
            formData.append(
                'fields[1096799_1][571867]',
                req.body['phoneNumber']
            );
            formData.append(
                'fields[1890587_1]',
                'Стоимость: ' + req.body['price'] + '; Отделка: ' + req.body['decoration'] + '; Комнат: ' + req.body['social']
            );
            formData.append('fields[1890589_3]', req.body['agreed']);
            formData.append('form_id', '1274942');
            formData.append('hash', '3baa8ee8cea874c20dc0d381217b219d');

            const options = {
                method: 'POST',
                body: formData,
            };

            const result = await fetch(
                'https://forms.amocrm.ru/queue/add',
                options
            )
                .then(response => response.text())
                .then(result => result)
                .catch(error => error);

            if (result.error_code > 0) {
                return res.status(500).json({
                    status: result.error_code,
                    data: {
                        message: result.msg,
                    },
                });
            }

            return res.status(200).json({
                status: 200,
                data: {
                    message: 'Message successfully sent',
                },
            });
        } catch (error: any) {
            return res.status(400).json({
                status: 400,
                data: {
                    message: error.message,
                },
            });
        }
    } else {
        return res.status(405).json({
            status: 405,
            data: {
                message: 'Method not allowed',
            },
        });
    }
}
