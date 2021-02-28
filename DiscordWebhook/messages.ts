const predefinedMessages: Record<string, Record<string, string>> = {
    'libvlc': {
        'cli': 'Please find the libvlc command line arguments documentation here :\nhttps://wiki.videolan.org/VLC_command-line_help'
    },
    'lvs': {
        'mcve': 'Please provide a [minimal project](https://stackoverflow.com/help/minimal-reproducible-example) that reproduces the issue, hosted on GitHub or any other git hosting system.\nYou can find minimal projects for each platform [in this folders](https://code.videolan.org/videolan/LibVLCSharp/-/tree/3.x/samples)',
        'bug': 'Please open a new issue [here](https://code.videolan.org/videolan/LibVLCSharp/-/issues).\nDon\'t forget to fill the issue template and to link a [minimal project](https://stackoverflow.com/help/minimal-reproducible-example) that reproduces the issue, hosted on GitHub or any other git hosting system.\nYou can find minimal projects for each platform [in this folders](https://code.videolan.org/videolan/LibVLCSharp/-/tree/3.x/samples)',
        'prw': 'A PR would be welcome. You can create one by forking [the project on GitHub](https://github.com/videolan/libvlcsharp)',
        'logs': 'Please send us the full libvlc logs, hosted on [pastebin](https://pastebin.com/) or similar. If you don\'t know how to gather logs, please read [this documentation](https://code.videolan.org/videolan/LibVLCSharp/-/blob/3.x/docs/troubleshooting.md)',
        'samples': 'Please have a look at our [minimal samples](https://code.videolan.org/videolan/LibVLCSharp/-/tree/3.x/samples) for each platform, and at our [advanced samples](https://code.videolan.org/mfkl/libvlcsharp-samples/)'
    }
};

export default predefinedMessages;