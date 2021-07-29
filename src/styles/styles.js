import Theme from '../styles/Theme';

export default ({
    container: {
        left: 0,
        marginTop: 10,
        marginLeft: 0,
        backgroundColor: '#8257E5',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius: 5,
    },
    nickname: {
        left: 60,
        width: 300,
        height: 25,
        paddingLeft: 0,
        fontSize: 17,
        color: '#fff'
    },
    btn: {
        height: 60,
        padding: 15,
        borderLeftWidth: 0.5,
        marginLeft: 0,
    },
    avatar: {
        left: 50,
        width: 50,
        height: 50,
        borderRadius: 90,
        backgroundColor: '#FFFFFF',
    },
    containerInput: {
        marginTop: 40,
        marginBottom: 100,
        width: 350,
        height: 60,
        marginLeft: -9,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    input: {
        flex: 1,
        height: '100%',
        paddingLeft: 20,
        color: Theme.colors.gray,
        fontSize: 17,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    btn1: {
        height: 55,
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderLeftWidth: 0.5,
        borderLeftColor: 'gray',

    },
    title: {
        fontSize: 30,
        color: Theme.colors.primary,
    },
    userLogo: {
        width: 145,
        height: 145,
        borderRadius: 90,
    }
});