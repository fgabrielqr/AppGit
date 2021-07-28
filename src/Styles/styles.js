import Theme from '../Styles/Theme';
export default ({

    container: {
        marginTop: 10,

        backgroundColor: '#DEE4E4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',


    },

    nickname: {
        paddingLeft: 0,
        fontSize: 17,
        fontFamily: Theme.fonts.rebotoRegular,
    },

    btn: {
        height: 55,
        padding: 15,
        borderLeftWidth: 0.5,

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
    }

});