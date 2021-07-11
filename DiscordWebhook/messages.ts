const predefinedMessages: Record<string, Record<string, string>> = {
    'libvlc': {
        'cli': 'Please find the libvlc command line arguments documentation here :\nhttps://wiki.videolan.org/VLC_command-line_help',
        'bug': 'Please find the (lib)VLC bug tracker here :\nhttps://code.videolan.org/videolan/vlc/-/issues',
        'irc': 'The core VLC members are on IRC on the Libera.chat network, on the `#videolan` channel. You can use the [KiwiIRC Web interface](https://kiwiirc.com/nextclient/#ircs://irc.libera.chat/#videolan) to chat with them.'
    },
    'lvs': {
        'mcve': 'Please provide a [minimal project](https://stackoverflow.com/help/minimal-reproducible-example) that reproduces the issue, hosted on GitHub or any other git hosting system.\nYou can find minimal projects for each platform [in this folders](https://code.videolan.org/videolan/LibVLCSharp/-/tree/3.x/samples)',
        'bug': 'Please open a new issue [here](https://code.videolan.org/videolan/LibVLCSharp/-/issues).\nDon\'t forget to fill the issue template and to link a [minimal project](https://stackoverflow.com/help/minimal-reproducible-example) that reproduces the issue, hosted on GitHub or any other git hosting system.\nYou can find minimal projects for each platform [in this folders](https://code.videolan.org/videolan/LibVLCSharp/-/tree/3.x/samples)',
        'prw': 'A PR would be welcome. You can create one by forking [the project on GitHub](https://github.com/videolan/libvlcsharp)',
        'logs': 'Please send us the full libvlc logs, hosted on [pastebin](https://pastebin.com/) or similar. If you don\'t know how to gather logs, please read [this documentation](https://code.videolan.org/videolan/LibVLCSharp/-/blob/3.x/docs/troubleshooting.md)',
        'samples': 'Please have a look at our [minimal samples](https://code.videolan.org/videolan/LibVLCSharp/-/tree/3.x/samples) for each platform, and at our [advanced samples](https://code.videolan.org/mfkl/libvlcsharp-samples/)',
        'nuget-output': 'On windows, you can customize the behavior of the libvlc-nuget package:\n- [Whether the library gets copied or not](https://github.com/mfkl/libvlc-nuget/blob/master/library-copy-enabling.md)\n- [Where the library is placed in the output folder](https://github.com/mfkl/libvlc-nuget/blob/master/files-location-selection.md)\n- [Which files are copied](https://github.com/mfkl/libvlc-nuget/blob/master/cherry-picking.md)'
    }
};

export default predefinedMessages;