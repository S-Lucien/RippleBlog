package top.naccl.service;

import java.io.File;
import java.io.IOException;

/**
 * @Author : RippleSu
 * @create 2023/2/27 22:40
 */
public interface RandomImageService {
    /**
     * 根据dir的值处理对应随机逻辑
     * @param dir
     * @return
     * @throws IOException
     */
    byte[] randomImageHandler(String dir, String method) throws IOException;
    /**
     * 随机从目录file下的非空目录中选择一个目录（包括file目录本身）并抽取其中一张图片
     * 各个目录被抽取到的概率相等
     * 如果存在嵌套的空目录可能返回默认图片
     * @param file
     * @return
     * @throws IOException
     */
    byte[] randomImageSimple(File file) throws IOException;

    /**
     * 从file目录下所有图片（包含子目录）随机抽取一张
     * 只有目录下有图片，则一定能抽取一张
     * @return
     * @throws IOException
     */
    byte[] randomImageOfAll(File file) throws IOException;

    /**
     * 从file目录中所有图片（不包含子目录）随机抽取一张
     * @return
     * @throws IOException
     */
    byte[] randomImageRootOnly(File file) throws IOException;

    /**
     * 指定目录下没有图片时，获取默认图片（images.default）
     * @return
     * @throws IOException
     */
    byte[] getDefaultImage() throws IOException;

}
