import { serviceApi } from 'group-digital-wealth-api-client';
import { errorHandling } from 'group-digital-wealth-error-handling';

export default function* root () {
    yield [
        serviceApi(),
        errorHandling()
    ];
}
