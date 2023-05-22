import { animated, useSpring } from '@react-spring/web';
import React from 'react'

const GearsTwoSVGPart = () => {
    const rotateBigGear = useSpring({
        from: {transform:"rotate(0deg)"},
        to: async (next) => {
            while (true) {
              await next({ transform: 'rotate(360deg)' });
              await next({ transform: 'rotate(0deg)' });
            }
          },
        config: {duration:6000},
        loop:true,
        reset:true
    })
    const rotateSmallGear = useSpring({
        from: {transform:"rotate(0deg)"},
        to: async (next) => {
            while (true) {
              await next({ transform: 'rotate(-360deg)' });
              await next({ transform: 'rotate(0deg)' });
            }
          },
        config: {duration:6000},
        loop:true,
        reset:true
    })
  return (
    <animated.g>
        <animated.path  style={{transformOrigin: "center", transformBox: "fill-box", ...rotateSmallGear}} fill-rule="evenodd" clip-rule="evenodd" d="M834 811L836 810L839 805C839 805 840 804 841 804C841 804 842 804 843 804L850 805C850 806 851 806 852 806C852 807 852 808 852 808L853 814L855 815V816C855 816 855 816 855 815L861 814C861 814 862 814 863 814C863 814 864 815 864 816L868 822C868 822 869 823 869 824C869 824 868 825 868 826L864 830L865 833L870 835C870 836 871 836 871 837C871 838 871 838 871 839L870 846H869C869 847 869 848 868 848L867 849H861L859 851C859 851 859 851 859 852L861 857C861 858 861 858 861 859C860 860 860 860 859 861L853 865C853 865 852 865 851 865C851 865 850 865 849 864L845 861H842L839 866C839 867 838 867 838 867C837 868 837 868 836 868L829 866C828 866 827 865 827 865C826 864 826 864 826 863V857L823 856L818 857C817 857 816 857 816 857C815 857 815 856 814 856L810 850C810 849 810 848 810 848C810 847 810 846 811 846L814 841V839L809 836C808 835 808 835 808 834C807 834 807 833 807 832L809 825C809 824 809 824 810 823C810 823 811 823 812 823L817 822C817 822 817 822 818 822L819 820C819 818 818 816 818 814C817 814 818 813 818 812C818 812 818 811 819 811L825 807C826 806 827 806 827 806C828 806 829 807 829 807L833 811C834 811 834 811 834 811ZM836 818C838 818 841 818 843 818C845 819 847 820 849 821C851 823 853 824 854 826C855 828 856 830 857 833C857 835 857 837 856 840C856 842 855 844 854 846C852 848 851 849 849 851C847 852 844 853 842 853C840 853 838 853 835 853C833 852 831 851 829 850C827 849 826 847 824 845C823 843 822 841 822 839C821 836 822 834 822 832C823 830 823 827 825 825C826 824 828 822 830 821C832 819 834 819 836 818Z" fill="#FF7300"/>
        <animated.path  style={{transformOrigin: "center", transformBox: "fill-box", ...rotateBigGear}} fill-rule="evenodd" clip-rule="evenodd" d="M331 868H332L334 865C334 865 334 865 335 864C335 864 335 864 336 864L340 865L341 866C341 866 341 866 341 867L342 870L343 871L346 870H347C348 870 348 871 348 871L350 875C351 875 351 875 351 876C351 876 350 876 350 877L348 879V881L351 882C352 883 352 883 352 883C352 884 352 884 352 884L351 889C351 889 351 889 351 890C350 890 350 890 350 890H346L345 892L346 895C346 895 346 895 346 896C346 896 346 897 345 897L342 899H341C340 899 340 899 340 899L337 897H336L334 900C334 900 333 900 333 901H332L328 900C327 900 327 899 327 899C327 899 326 899 326 898V895L325 894L322 895C321 895 321 895 321 895C320 895 320 894 320 894L317 890C317 890 317 890 317 889C317 889 317 889 318 888L320 886L319 884L317 883C316 882 316 882 316 882C316 881 316 881 316 881L317 876C317 876 317 876 317 875C318 875 318 875 318 875H321C322 875 322 875 322 875V873C322 872 322 871 322 870C322 870 322 870 322 869V868L326 866H327H328L331 868ZM332 873C333 872 335 872 336 873C337 873 339 874 340 874C341 875 342 876 342 877C343 878 344 880 344 881C344 882 344 883 344 885C343 886 343 887 342 888C341 889 340 890 339 891C338 892 337 892 336 892C334 893 333 893 332 892C330 892 329 891 328 891C327 890 326 889 325 888C325 887 324 885 324 884C324 883 324 882 324 880C324 879 325 878 326 877C326 876 327 875 329 874C330 873 331 873 332 873Z" fill="#019DD6"/>
    </animated.g>
  )
}

export default GearsTwoSVGPart
